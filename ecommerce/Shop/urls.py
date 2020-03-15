from django.conf.urls import url

# from Shop.views import MainCategory

from.import views

app_name='Shop'

urlpatterns = [
    url(r'^$', views.Home, name='home'),
    url(r'^list/$', views.product_list, name='product_list'),
    url(r'^(?P<main_category_slug>[-\w]+)/$', views.product_list, name='product_list_by_category'),
    url(r'^sub/(?P<sub_category_view>[-\w]+)/$', views.subcategory, name='subcategory'),
    url(r'^subtwo/(?P<subtwo_category_view>[-\w]+)/$', views.subtwocategory, name='subtwocategory'),
    url(r'^photo/(?P<product_slug>[-\w]+)/$', views.product_image, name='product_image'),
    url(r'^detail/(?P<id>\d+)/(?P<slug>[-\w]+)/$', views.product_detail, name='product_detail'),
]

