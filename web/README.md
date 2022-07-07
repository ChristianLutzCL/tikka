<a>
<img height=80 src="https://svgshare.com/i/i8Q.svg"/>
</a>

# TODO
- Prio 1: Dashboard mit Composer Funktion erstellen
    ### Benötigte Funktionen:
    - Texteingabe
    - Bild Upload
    - Direkt Veröffentlichen
    - (Scheduler)


## Composer future Feature
    - Create Instagram Posts automaticly like Bannerbear
    - Use some AI to create texts for posts
    


addToDraft Function

- Create Row in Database
	- ID
	- UID (UserID)
	- Draft-ID (ID for every draft created)
	- Images (JSON containing all Links to the Images)
		- ID
		- URL
	- Description (Description Text for IG)
	- CreatedAt (Date when Draft is created)
	- isScheduled (Bool)
	- Schedule (DateTime for Schedule)


- Upload Images to Storage
	- For every Image in Images upload to defined Path:  igcontent/UID/DraftID/[ImageName]
	- Return URL for every Image


- Update created Row in Database
	- Images JSON (ID, Image URL)
