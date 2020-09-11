from django.urls import path
from.views import StationeryListView, StationeryDetailView

urlpatterns = [
  path('', StationeryListView.as_view()),
  path('<int:pk>/', StationeryDetailView.as_view())
]