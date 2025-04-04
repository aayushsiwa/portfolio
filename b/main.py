from fastapi import FastAPI
from fastapi.responses import PlainTextResponse, StreamingResponse
from app.scheduler import update_log_and_push, read_cron_log, stream_cron_log

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello from Render!"}

@app.post("/trigger")
def trigger():
    update_log_and_push()
    return {"status": "triggered"}

@app.get("/logs")
def logs():
    return PlainTextResponse(read_cron_log())

@app.get("/stream")
def stream():
    return StreamingResponse(stream_cron_log(), media_type="text/plain")
