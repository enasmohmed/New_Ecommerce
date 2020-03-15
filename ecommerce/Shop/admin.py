from django.contrib import admin
from Shop.models import MainCategory, SubCategory, SubtwoCategory, Product
# Register your models here.

admin.site.register(MainCategory)
admin.site.register(SubCategory)
admin.site.register(SubtwoCategory)
admin.site.register(Product)