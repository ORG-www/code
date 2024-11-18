# from django.urls import path
# from . import views

# urlpatterns = [
#     path('posts/', views.get_posts, name='get_posts'),
# ]


from django.urls import path
from .views import PostListView, CreateCommentView

urlpatterns = [
    path('posts/', PostListView.as_view(), name='post-list'),
    path('comments/', CreateCommentView.as_view(), name='create-comment'),
]
