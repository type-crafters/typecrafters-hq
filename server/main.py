from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class NewUser(BaseModel):
    user_name: str
    email: str
    password: str

@app.post("/users/new")
def new_user(user: NewUser):
    pass