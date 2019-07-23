from google.appengine.ext import ndb

class Club(ndb.model):
    name = ndb.StringProperty()
    startTime = ndb.TimeProperty()
    endTime = ndb.TimeProperty()
    days = ndb.StringProperty(repeated=True)
    days = ndb.DateProperty()
    contact_email = ndb.StringProperty()
    contact_phone = ndb.StringProperty()


class Event(ndb.model):
    name = ndb.StringProperty()
    startTime = ndb.DateTimeProperty()
    endTime = ndb.DateTimeProperty()
    contact_email = ndb.StringProperty()
    contact_phone = ndb.StringProperty()

class Course(ndb.model):
    name = ndb.StringProperty()
    startTime = ndb.TimeProperty()
    endTime = ndb.TimeProperty()
    days = ndb.StringProperty(repeated=True)
    startDate = ndb.DateTimeProperty()
    endDate = ndb.DateTimeProperty()
    contact_email = ndb.StringProperty()
    contact_phone = ndb.StringProperty()

class College(ndb.model):
    name = ndb.StringProperty()
    clubs = ndb.KeyProperty(Club)
    courses = ndb.KeyProperty(Course,repeated=True)
    shows = ndb.KeyProperty(Shows,repeated=True)
    events = ndb.KeyProperty(Event,repeated=True)