from django.db import models

# Create your models here.
class Stationery(models.Model):
  name = models.CharField(max_length=40)
  description = models.CharField(max_length=500)
  designer = models.ForeignKey('designers.Designer', related_name='stationery', on_delete=models.CASCADE)
  type = models.CharField(max_length=40)
  users_who_basketed = models.ManyToManyField('jwt_auth.User')
  price = models.FloatField()
  quantity = models.IntegerField()
  in_stock = models.BooleanField(default=True)
  image = models.CharField(max_length=500)

  def __str__(self):
      return f'{self.name} - {self.designer}'

  

