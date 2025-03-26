from pydantic import BaseModel, EmailStr
from typing import Optional

class Event(BaseModel):
    title: str
    dates: str
    time: str
    location: str
    description: str
    agenda1: str
    agenda2: str
    agenda3: str
    agenda4: Optional[str] = None
    agenda5: Optional[str] = None
    organizer: Optional[str] = None
    organizerPic: Optional[str] = None
    cost: Optional[str] = None
    DisplayImg: Optional[str] = None
    MainImg: Optional[str] = None
     
class Signup(BaseModel):
    full_name: str
    email: EmailStr
    password: str