from django.db import models

# Create your models here.
class Designer(models.Model):
  name = models.CharField(max_length=100)
  description = models.CharField(max_length=500)
  image = models.CharField(max_length=500)
  location = models.CharField(max_length=100)

  def __str__(self):
      return f'{self.name} - {self.location}'
