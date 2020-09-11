# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Designer
from .serializers import DesignerSerializer

class DesignerListView(APIView):

  def get(self, _request):
    designers = Designer.objects.all() #grabbing all of the stationerys from db
    serialized_designers = DesignerSerializer(designers, many=True) #turning them into JSON 
    return Response(serialized_designers.data, status=status.HTTP_200_OK) #send back as JSON with status 200 OK

class DesignerDetailView(APIView):

  def get_designer(self, pk):
      try:
        return Designer.objects.get(pk=pk)
      except Designer.DoesNotExist:
        raise NotFound()

  def get(self, _request, pk):
    designer = self.get_designer(pk)
    serialized_designer = DesignerSerializer(designer)
    return Response(serialized_designer.data, status=status.HTTP_200_OK)
  

