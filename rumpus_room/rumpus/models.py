from django.db import models
from django.utils.timezone import now

# count likes on a post. use the post id as the primary key
class Like(models.Model):
    id = models.AutoField(primary_key=True) # create auto incremented primary key id field
    count = models.IntegerField(default=0) # count of likes
    def __str__(self):
        return str(self.id)
    
class ForumPost(models.Model):
    id = models.AutoField(primary_key=True) # create auto incremented primary key id field
    body = models.CharField(max_length=255) # body of post
    date = models.DateTimeField(auto_now_add=True) # date/time of post creation
    like = models.ForeignKey(Like, on_delete=models.CASCADE) # foreign key to Like

    # def save(self, *args, **kwargs):
    #     # Automatically create a Like instance if needed
    #     if not self.like:
    #         self.like = Like.objects.create()
    #     super().save(*args, **kwargs)
        
    def __str__(self):
        return self.id