from django.db.models import TextField

from wagtailmdx.widgets import MDXEditorWidget

class MDXField(TextField):
    def formfield(self, **kwargs):
        defaults = {"widget": MDXEditorWidget}
        defaults.update(kwargs)
        return super().formfield(**defaults)