from django.urls import path
from.views import DesignerListView, DesignerDetailView

urlpatterns = [
  path('', DesignerListView.as_view()),
  path('<int:pk>/', DesignerDetailView.as_view())
]