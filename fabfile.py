# -*- coding: utf-8 -*-
from fabric.api import abort, env, cd, prefix, sudo, run, \
    hide, task, local


def hello(name="world"):
    print("Hello %s!" % name)


def myfunc():
    local('pwd')
