from fastapi import FastAPI
from main import makePdf
app = FastAPI()

@app.get("/")
def root():
    makePdf(data={"name":"Sara Ali Khan"})
    return {"message": "everything is working perfectly"}