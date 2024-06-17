from django.shortcuts import render
# from rest_framework import generics
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Product,Category
from .serializers import ProductSerializer,CategorySerializer



# Create your views here.

# Reune las dos
class ProductViewSet(viewsets.ModelViewSet):
     queryset = Product.objects.all()
     serializer_class= ProductSerializer


# def get_queryset(self):
#      queryset = super().get_queryset()
#      category = self.request.queryset_params.get('category')
#      if category:
#           queryset =queryset.filter(category=category)
#      return queryset
          

     @action(detail=False)
     def by_category(self, request):
          category=self.request.query_params.get('category',None)
          products=Product.objects.filter(category=category)
          serializer=ProductSerializer(products, many=True)
          return Response(serializer.data)
 
class CategoryViewSet(viewsets.ModelViewSet):
     queryset = Category.objects.all()
     serializer_class= CategorySerializer


# class ProductList(generics.ListCreateAPIView):
#      queryset = Product.objects.all()
#      serializer_class= ProductSerializer

# class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
#      queryset = Product.objects.all()
#      serializer_class = ProductSerializer
