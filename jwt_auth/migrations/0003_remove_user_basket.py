# Generated by Django 3.1.1 on 2020-09-15 09:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0002_auto_20200914_1728'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='basket',
        ),
    ]
