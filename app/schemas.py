from pydantic import BaseModel
from typing import Optional

# User schema for creating a new user
class UserCreate(BaseModel):
    full_name: str
    country: str
    state: str
    department_name: str
    department_id: str
    phone_number: str
    email: str
    verification_code: str

    class Config:
        from_attributes = True

# User schema for returning the user information
class User(BaseModel):
    id: int
    full_name: str
    country: str
    state: str
    department_name: str
    department_id: str
    department_img: str
    phone_number: str
    email: str
    verification_code: str

    class Config:
        orm_mode = True
