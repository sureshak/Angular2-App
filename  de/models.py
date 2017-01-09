from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Angular2_backEnd(models.Model):
	Name = models.CharField(max_length=20)
	Email = models.CharField(max_length=20,unique=True)
	Mobile = models.CharField(max_length=20,unique=True)
	Password = models.CharField(max_length=20)
	Pincode = models.CharField(max_length=20)

class ImgUpload(models.Model):
	Imag = models.FileField(
		upload_to='test_img/documents/%Y/%m/%d'
	)	