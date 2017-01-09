from django.shortcuts import render
from Backend_Logic.models import *
from Backend_Logic.serializers import *
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status


class Backend_List(generics.ListCreateAPIView):
	queryset = Angular2_backEnd.objects.all()
	serializer_class = BackEndSerializer

class Backend_RUD(generics.RetrieveUpdateDestroyAPIView):
	queryset = Angular2_backEnd.objects.all()
	serializer_class = BackEndSerializer

class GetImg(generics.ListCreateAPIView):
	queryset = ImgUpload.objects.all()
	serializer_class = ImgStorageSerializer

	def post(self, request, format=None):
		print "request from vicky" 
		serializer = ImgStorageSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			print serializer.data['Imag']
			data = {
				'id': serializer.data['id'],
				'Imag': request.build_absolute_uri('{0}'.format(serializer.data['Imag'])),

			}
			return Response(data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

