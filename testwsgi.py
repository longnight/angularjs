
def app(environ, start_response):
    data = b"Hello, World!~~~~\n"
    start_response("200 OK", [
        ("Content-Type", "text/plain"),
        ("Content-Length", str(len(data)))
    ])
    return iter([data])

"""

utc_tz = timezone.utc
day1 = datetime(year=2016, month=8, day=1, hour=18, minute=50)

day2 = datetime(year=2016, month=8, day=5, hour=0, minute=0)

# datetime.datetime(2016, 8, 1, 18, 50, tzinfo=<UTC>):
utc_day1 = timezone.make_aware(day1, timezone=utc_tztz=utc_tz)

# datetime.datetime(2016, 8, 5, 18, 50, tzinfo=<DstTzInfo 'Asia/Chongqing' CST+8:00:00 STD>)
bj_day1 = timezone.make_aware(day1)

# datetime.datetime(2016, 8, 5, 0, 0, tzinfo=<DstTzInfo 'Asia/Chongqing' CST+8:00:00 STD>)
bj_day2 = timezone.make_aware(day2)



day3 = datetime(year=2016, month=8, day=1, hour=0, minute=0)
day4 = datetime(year=2016, month=8, day=3, hour=0, minute=0)

datetime(year=2016, month=8, day=3, hour=0, minute=3) - datetime(year=2016, month=8, day=1, hour=0, minute=0)
"""
