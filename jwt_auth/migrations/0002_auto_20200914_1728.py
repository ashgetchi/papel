# Generated by Django 3.1.1 on 2020-09-14 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stationery', '0002_auto_20200912_1345'),
        ('jwt_auth', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='basket',
        ),
        migrations.AddField(
            model_name='user',
            name='basket',
            field=models.ManyToManyField(to='stationery.Stationery'),
        ),
    ]
