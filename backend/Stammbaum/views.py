from django.shortcuts import render

# Create your views here.
def hauptseite(request):
    return render(request,'frontend/index.html')


