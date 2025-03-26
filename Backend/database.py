from model import Event
from model import Signup
import motor.motor_asyncio
from fastapi import HTTPException

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb+srv://bpscrohit:Rohit123@cluster0.rszwkl0.mongodb.net/')
database = client.EventList
collection = database.events


async def fetch_one_event(title):
    document = await collection.find_one({"title": title})

    if not document:
        raise HTTPException(status_code=404, detail="Event not found")

    return document


async def fetch_all_events():
    events = []
    async for document in collection.find():
        if "title" not in document or "dates" not in document:  # ✅ Ensure required fields exist
            print(f"⚠️ Skipping invalid document: {document}")  # Debugging
            continue
        try:
            events.append(Event(**document))
        except Exception as e:
            print(f"❌ Error: {e}")
    return events



async def create_event(event: Event):
    document = event.dict()
    result = await collection.insert_one(document)
    return document


async def update_event(title: str, updated_data: dict):
    await collection.update_one({"title": title}, {"$set": updated_data})
    document = await collection.find_one({"title": title})
    return document


async def remove_event(title: str):
    await collection.delete_one({"title": title})
    return True

database = client.EventList
collection1 = database.users

# Create a new user
async def create_user(user: Signup):
    document = user.dict()
    result = await collection1.insert_one(document)
    return document

# Fetch a user by email
async def fetch_one_user(email: str):
    document = await collection1.find_one({"email": email})
    return document