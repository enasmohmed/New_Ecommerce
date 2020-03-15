from django.shortcuts import render, render_to_response, get_object_or_404
from django.views import View
from Shop.models import MainCategory, Product, SubCategory, SubtwoCategory
from cart.forms import CartAddProductForm
# Create your views here.

def Home(request, category_slug=None):
    category = None
    categories = MainCategory.objects.all()
    if category_slug:
        category = get_object_or_404(MainCategory, slug=category_slug)

    context = {
        'category': category,
        'categories': categories
    }
    return render(request, 'shop/index.html', context)

 
def product_list(request, main_category_slug=None):
    category = None
    categories = MainCategory.objects.all()
    products = Product.objects.filter(available=True)
    if main_category_slug:
        sub_category = get_object_or_404(MainCategory, slug=main_category_slug)
        products = products.filter(category=category)

    context = {
        # 'sub_category': sub_category,
        'category': category,
        'categories': categories,
        'products': products
    }
    return render(request, 'shop/product/home.html', context)

def subcategory(request, sub_category_view):
    category = MainCategory.objects.get(slug=sub_category_view)
    subcategories = SubCategory.objects.filter(category=category)
    return render(request, 'shop/product/sub.html',
                  {'subcategories': subcategories})

def subtwocategory(request, subtwo_category_view):
    category = SubCategory.objects.get(slug=subtwo_category_view)
    subtwocategories = SubtwoCategory.objects.filter(category=category)
    return render(request, 'shop/product/subtwo.html',
                  {'subtwocategories': subtwocategories})

def product_image(request, product_slug):
    category = SubtwoCategory.objects.get(slug=product_slug)
    products = Product.objects.filter(category=category)
    return render(request, 'shop/product/photo.html',
                  {'products': products})



def product_detail(request, id, slug):
    product = get_object_or_404(Product,  id=id, slug=slug, available=True)
    cart_product_form = CartAddProductForm()
    return render(request, 'shop/product/detail.html',
                 {'product':product,
                   'cart_product_form': cart_product_form})
                


