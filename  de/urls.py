from django.conf.urls import url
from . import views
urlpatterns = [
	url(r'^rud/(?P<pk>[0-9]+)/$', views.Backend_RUD.as_view()),
	url(r'^list/$', views.Backend_List.as_view()),
	url(r'^get-img/',views.GetImg.as_view()),

	]