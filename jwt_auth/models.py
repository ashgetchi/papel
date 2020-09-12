from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  email = models.CharField(max_length=100, unique=True)
  basket = models.IntegerField(default=0)