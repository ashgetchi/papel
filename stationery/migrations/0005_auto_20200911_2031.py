# Generated by Django 3.1.1 on 2020-09-11 20:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('designers', '0002_designer_description'),
        ('stationery', '0004_auto_20200911_1722'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stationery',
            name='designer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='stationery', to='designers.designer'),
        ),
    ]
