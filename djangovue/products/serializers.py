from rest_framework import serializers
from django_filters import rest_framework as filters
from .models import Product, Category



class ProductFilter(filters.FilterSet):
     class Meta:
          model = Product
          fields = {'category':['exact'],}


class ProductSerializer(serializers.ModelSerializer):
     category_name = serializers.ReadOnlyField(source='category.name')
     price_type_description = serializers.ReadOnlyField(source='get_price_type_display')

     class Meta:
          model=Product
          # fields='__all__'
          fields=('id','name','image','category','category_name','description','price','price_type','price_type_description',)
          filterset_class = ProductFilter

class CategorySerializer(serializers.ModelSerializer):
     class Meta:
          model= Category
          fields='__all__'
