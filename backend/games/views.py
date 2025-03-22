from django_filters import NumberFilter, BaseInFilter
from rest_framework import viewsets
from .serializers import GameSerializer
from rest_framework import permissions
from .models import Game
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend, FilterSet


class NumberInFilter(BaseInFilter, NumberFilter):
    pass


class GameFilter(FilterSet):
    min_price = NumberFilter(field_name="price", lookup_expr="gte")
    max_price = NumberFilter(field_name="price", lookup_expr="lte")
    genre = NumberInFilter(field_name="genre", lookup_expr="in")

    class Meta:
        model = Game
        fields = [
            'type',
            'player_count',
            'age_group',
            'difficulty',
            'genre',
            'mechanic',
            'duration',
        ]


class GameModelViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    filter_backends = [SearchFilter, DjangoFilterBackend, OrderingFilter]
    filterset_class = GameFilter
    ordering = ('-created_at',)
    ordering_fields = ['discount_price, created_at, rating']
    search_fields = ['title', 'description']

    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes =  [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAdminUser]
        return [permission() for permission in permission_classes]

