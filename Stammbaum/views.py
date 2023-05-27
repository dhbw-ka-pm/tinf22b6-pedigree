from django.shortcuts import render

# Create your views here.
def hauptseite(request):
    return render(request,'hauptseite.html')



