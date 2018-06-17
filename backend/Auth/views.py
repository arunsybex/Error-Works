# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.contrib.auth import authenticate,logout,login
import json,datetime


# Create your views here.


def login(request):
    if request.method == "POST":
        data = json.loads(request.body)
        user = authenticate(request, **data)
        print user,request.user.is_authenticated()
        return JsonResponse({"result":"hai"})