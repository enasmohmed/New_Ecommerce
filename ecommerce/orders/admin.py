from django.contrib import admin
from .models import OrderItem,order
from import_export.admin import ImportExportActionModelAdmin
from django.urls import reverse
from django.utils.safestring import mark_safe




def order_pdf(obj):
	return mark_safe('<a href="{}">PDF</a>'.format(reverse('orders:admin_order_pdf',args=[obj.id])))

order_pdf.short_description = 'Order PDF'


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    raw_id_fields = ['product']


class OrderAdmin(ImportExportActionModelAdmin):
    list_display = ['id', 'first_name', 'last_name', 'email', 'address', 'postal_code', 'city', 'paid', 'created',
                    'updated', order_pdf,]
    list_filter = ['paid', 'created', 'updated']
    inlines = [OrderItemInline]


admin.site.register(order, OrderAdmin)
