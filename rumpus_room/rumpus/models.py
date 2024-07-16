from django.db import models
from django.utils.timezone import now

class ForumPost(models.Model):

    id = models.AutoField(primary_key=True) # create auto incremented primary key id field
    body = models.CharField(max_length=30) # body of post
    date = models.DateTimeField(auto_now_add=True) # date/time of post creation
    # name = models.CharField(max_length=30, blank=True) # name of poster

    def __str__(self):
        return self.id