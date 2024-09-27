from django.apps import AppConfig


class WagtailmdxConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'wagtailmdx'

default_app_config = "wagtailmdx.apps.WagtailmdxConfig"
