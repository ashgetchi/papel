from django.urls import path
from .views import Register, LoginView
from .views import ProfileView


urlpatterns = [
  path('register/', Register.as_view()),
  path('login/', LoginView.as_view()),
  path('profile/', ProfileView.as_view())
]