from .cm_bot import bot, app
from .database import create_tables

create_tables()

__all__ = ["bot", "app"]
