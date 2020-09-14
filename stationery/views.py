# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

from .models import Stationery
from .serializers import StationerySerializer


class StationeryListView(APIView):

  def get(self, _request):
    stationerys = Stationery.objects.all() #grabbing all of the stationerys from db
    serialized_stationerys = StationerySerializer(stationerys, many=True) #turning them into JSON 
    return Response(serialized_stationerys.data, status=status.HTTP_200_OK) #send back as JSON with status 200 OK

class StationeryDetailView(APIView):

  permission_classes = (IsAuthenticatedOrReadOnly),

  def get_stationery(self, pk):
      try:
        return Stationery.objects.get(pk=pk)
      except Stationery.DoesNotExist:
        raise NotFound()

  def get(self, _request, pk):
    stationery = self.get_stationery(pk)
    serialized_stationery = StationerySerializer(stationery)
    return Response(serialized_stationery.data, status=status.HTTP_200_OK)

  def put(self, request, pk):
    stationery_to_update = self.get_stationery(pk=pk)
    updated_stationery = StationerySerializer(stationery_to_update, data=request.data)
    if updated_stationery.is_valid():
      updated_stationery.save()
      return Response(updated_stationery.data, status=status.HTTP_202_ACCEPTED)
    return Response(updated_stationery.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
