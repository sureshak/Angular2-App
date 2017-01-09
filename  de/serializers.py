from rest_framework import serializers
from Backend_Logic.models import *
class BackEndSerializer(serializers.ModelSerializer):
	class Meta:
		model = Angular2_backEnd

class ImgStorageSerializer(serializers.ModelSerializer):
	class Meta:
		model = ImgUpload