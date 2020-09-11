from django.db import models

# Create your models here.
class Stationery(models.Model):
  name = models.CharField(max_length=40)
  description = models.CharField(max_length=500)
  designer = models.CharField(max_length=40)
  type = models.CharField(max_length=40)
  users_who_basketed = models.CharField(max_length=100)
  price = models.FloatField()
  quantity = models.IntegerField()
  in_stock = models.BooleanField(default=True)
  image = models.CharField(max_length=500)

  def __str__(self):
      return f'{self.name} - {self.designer}'

  

