from rest_framework import serializers

from .models import Stationery
from designers.serializers import DesignerSerializer

class StationerySerializer(serializers.ModelSerializer):

  class Meta:
    model = Stationery
    fields = '__all__'

class PopulatedStationerySerializer(StationerySerializer):

    designer = DesignerSerializer(many=True)
    