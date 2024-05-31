from django.db import models
from django.utils import timezone
# Create your models here.

class Proovedor(models.Model):
     tipo = models.CharField(max_length=100)

     def __str__(self):
          return self.tipo


class Productos(models.Model):

     class PostObjects(models.Manager):
          def get_queryset(self):
               return super().get_queryset().filter(disponibilidad='disponible')
     disponible='dis'
     agotado='ago'
     options=[
          (disponible,'Disponible'),
          (agotado,'Agotado'), 
     ]
     nombre = models.CharField(max_length=100)
     precio = models.IntegerField()
     cantidad = models.IntegerField()
     proovedor = models.ForeignKey(Proovedor,on_delete=models.CASCADE)
     contacto = models.CharField(max_length=100)
     disponibilidad = models.CharField(max_length=100,choices=options,default='disponible')
     objects = models.Manager()
     PostObjects = PostObjects()

     def __str__(self):
          return self.nombre
