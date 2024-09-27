from django.forms import widgets

class MDXEditorWidget(widgets.HiddenInput):
    class Media:
        js = ('/static/js/mdx.js',)
        css={
            "all": ["/static/css/main.css"],
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.attrs['data-controller'] = 'mdx'