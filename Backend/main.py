from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Event
from model import Signup

from database import (
    fetch_one_event,
    fetch_all_events,
    create_event,
    update_event,
    remove_event,
    fetch_one_user,
    create_user
)

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

# Events API

@app.get("/api/events")
async def get_events():
    response = await fetch_all_events()
    return response

@app.get("/api/events/{event_title}", response_model=Event)
async def get_event_by_title(event_title: str):
    response = await fetch_one_event(event_title)
    if response:
        return response
    raise HTTPException(404, f"There is no Event with this title: {event_title}")

@app.post("/api/events", response_model=Event)
async def post_event(event: Event):
    response = await create_event(event)
    if response:
        return response
    raise HTTPException(400, "Something went wrong / Bad Request")

@app.put("/api/events/{event_title}", response_model=Event)
async def put_event(event_title: str, updated_data: dict):
    response = await update_event(event_title, updated_data)
    if response:
        return response
    raise HTTPException(404, f"There is no Event with this title: {event_title}")

@app.delete("/api/events/{event_title}")
async def delete_event(event_title: str):
    response = await remove_event(event_title)
    if response:
        return "Successfully deleted Event item!"
    raise HTTPException(404, f"There is no Event with this title: {event_title}")


# FastAPI route to create a new user
@app.post("/api/users", response_model=Signup)
async def post_user(user: Signup):
    response = await create_user(user)
    if response:
        return response
    raise HTTPException(400, "Something went wrong / Bad Request")

# FastAPI route to fetch a user by email
@app.get("/api/users/{email}", response_model=Signup)
async def get_user_by_email(email: str):
    response = await fetch_one_user(email)
    if response:
        return response
    raise HTTPException(404, f"No user found with this email: {email}")