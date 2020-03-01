from django.db import models

class Book(models.Model):
    book_id = models.IntegerField()
    book_name = models.CharField(max_length=50)
    book_price = models.FloatField()
