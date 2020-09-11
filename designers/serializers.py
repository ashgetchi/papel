from rest_framework import serializers
from .models import Designer
from stationery.serializers import StationerySerializer

class DesignerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Designer
        fields = '__all__'

class PopulatedDesignerSerializer(DesignerSerializer):
  
    stationery = StationerySerializer(many=True)
    