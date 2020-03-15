from django.db import models
from django.urls import reverse
# Create your models here.

class MainCategory(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200,db_index=True,unique=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('Shop:product_list_by_category', args=[self.slug])

class SubCategory(models.Model):
    category = models.ForeignKey(MainCategory, related_name='subcategory', on_delete=models.CASCADE)
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200,db_index=True)


    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('Shop:subcategory', args=[self.slug])

class SubtwoCategory(models.Model):
    category = models.ForeignKey(SubCategory, related_name='subtwocategory', on_delete=models.CASCADE)
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200,db_index=True)


    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('Shop:subtwocategory', args=[self.slug])


class Product(models.Model):
    category = models.ForeignKey(SubtwoCategory,related_name='product', on_delete=models.CASCADE, default=0)
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200,db_index=True)
    Image = models.ImageField(blank=True, upload_to='media/images/', null=True)
    description = models.TextField(blank=True)
    price = models.FloatField()
    stock = models.PositiveIntegerField()
    available = models.BooleanField(default=True)

    
    class Meta:
        ordering = ('name', )
        index_together = (('id', 'slug'),)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('Shop:product_detail',args=[self.id,self.slug])


