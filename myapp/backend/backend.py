import /../mongodb_database/database
from flask import Flask, request, jsonify 
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

proj_db = {
  'team_roster': [
    {
      'id': '1234',                     # Not displayed to roster page, will be generated by mongo
      'name': 'Darren Collins',                  
      'status' : 'Active',              # Not displayed to roster page
      'role': 'Advisor',                # Not displayed to roster page
      'position' : 'Lead Coach',
      'specialization' : 'N/A',
      'photo': '', 
      'email': 'dc@gmail.com',         
      'phone_number': '805-555-1234',  
      'quote' : 'Darren Collins teaches at Tahoma Senior High School, mainly physics but also astronomy and chemistry. He was introduced to the idea of a robotics team by a teacher from another school. Then, in 2006, he was approached by a group of students at Tahoma Senior High wanting to start a robotics team as part of the national FIRST Robotics Competition. Mr. Collins was suited for the adviser position on the Robotics team because he majored in physics and has experience with design and computer science. In 2012, Mr. Collins started a Robotics class at the High School. He enjoys music, camping, fishing, swimming, and a number of other outdoor activities. We really enjoy the opportunity that Mr. Collins has provided by being the leader of the Tahoma Robotics Team.'
    },
    {
      'id': '1235',                     # Not displayed to roster page, will be generated by mongo
      'name': 'Maggie Baldridge',                  
      'status' : 'Active',              # Not displayed to roster page
      'role': 'Advisor',                # Not displayed to roster page
      'position' : 'Assistant Coach',
      'specialization' : 'N/A',
      'photo': '', 
      'email': 'mb@gmail.com',         
      'phone_number': '805-555-1234',  
      'quote' : 'Maggie joined the team as a parent volunteer during the 2016-17 season and served on the Booster Club board before being hired as the assistant coach in 2017. While her background is in medicine, she uses her organizational skills to provide administrative support and make travel arrangments for the team.  \"I like that the club takes in students of all interests and skills. Mostly I like the changes that I see in students who grow through their experience with robotics. \" She is married and has a son on the team in addition to two grown children and 2 grandsons. She enjoys traveling, swimming biking and is currently pursuing a degree in molecular biology.'
    },
    {
      'id': '1237',                     # Not displayed to roster page, will be generated by mongo
      'name': 'Adrienne Rime',                  
      'status' : 'Active',              # Not displayed to roster page
      'role': 'Advisor',                # Not displayed to roster page
      'position' : 'Mentor',
      'specialization' : 'N/A',
      'photo': '', 
      'email': 'ar@gmail.com',         
      'phone_number': '805-555-1234',  
      'quote' : 'Adrienne became involved in the club through Bryan Andrews, one of the founding members of the team. When asked what she likes about the club, she stated, \"I like that FIRST teaches students how to think outside of the box and solve problems.\" In her free time, Adrienne likes to go mountain biking and backpacking and is starting to learn how to rock climb. She also works for FIRST Washington and her work helps her to inspire at a larger scale. She has become more involved in the team once again through her daughter Claire.'
    },
    {
      'id': '1237',                     # Not displayed to roster page, will be generated by mongo
      'name': 'Austin Weary',                  
      'status' : 'Active',              # Not displayed to roster page
      'role': 'Advisor',                # Not displayed to roster page
      'position' : 'Mentor',
      'specialization' : 'N/A',
      'photo': '', 
      'email': 'aw@gmail.com',         
      'phone_number': '805-555-1234',  
      'quote' : 'Austin Weary joined our club in its first year. In our teams rookie season, we went to competition with a robot named Epic. Austin enjoyed this and would have been back the next year for more, but instead it was off to college. Throughout college, Austin came back to help on the team for short periods of time. Since then, Austin has been working closely with the scout lead and the strategy team during the competition season. He has also been working with the designers to give constructive criticism on different mechanisms. In his free time, Austin spends time taking care of his daughter and watching movies. He likes FIRST because of it \"gives kids opportunities to learn valuable skills, develop character, and push themselves.\"'
    },  
    {
      'id': '5678',                     # Not displayed to roster page, will be generated by mongo
      'name': 'Avery',                  
      'status' : 'Active',              # Not displayed to roster page
      'role': 'Member',                # Not displayed to roster page
      'position' : 'Programmer',
      'specialization' : 'Programming',
      'photo': '', 
      'email': 'avery@gmail.com',       
      'phone_number': '805-555-1111',  
      'quote' : ''
    }, 
    {
      'id': '1212',                     # Not displayed to roster page, will be generated by mongo
      'name': 'Jacob',                  
      'status' : 'Active',              # Not displayed to roster page
      'role': 'Officer',                # Not displayed to roster page
      'position' : 'Lead Designer',
      'specialization' : 'Design',
      'photo': '', 
      'email': 'jacobemail@gmail.com', 
      'phone_number': '805-555-1212',   
      'quote' : 'Something epic here'
    }, 
    {
      'id': '3434',                     # Not displayed to roster page, will be generated by mongo
      'name': 'Shane',                  
      'status' : 'Active',              # Not displayed to roster page
      'role': 'Officer',                # Not displayed to roster page
      'position' : 'President',
      'specialization' : 'Fabrication',
      'photo': '', 
      'email': 'president@gmail.com',   
      'phone_number': '805-555-1234',  
      'quote' : 'Throw it back to Stack Attack.'
    },
    {
      'id': '3435',                     # Not displayed to roster page, will be generated by mongo
      'name': 'Zoey',                  
      'status' : 'Active',              # Not displayed to roster page
      'role': 'Officer',                # Not displayed to roster page
      'position' : 'Lead Assembler',
      'specialization' : 'Fabrication',
      'photo': '', 
      'email': 'president@gmail.com',   
      'phone_number': '805-555-1234',  
      'quote' : 'Throw it back to Stack Attack.'
    },
    {
      'id': '0001',                     # Not displayed to roster page, will be generated by mongo
      'name': 'MemberONE',                  
      'status' : 'Active',              # Not displayed to roster page
      'role': 'Member',                 # Not displayed to roster page
      'position' : 'Member',
      'specialization' : 'N/A',
      'photo': '', 
      'email': 'memberone@gmail.com',   
      'phone_number': '805-555-0001',   
      'quote' : 'this is my quote here'
    }    
  ]
}

@app.route('/test')
def hello_world():
  test = request.args.get('test')
  if (test != None):
    return test
  else:
    return "fail"

@app.route('/teamroster', methods=['GET', 'POST'])
def get_team_roster():
  if request.method == 'GET':
    name = request.args.get('name')
    status = request.args.get('status')
    role = request.args.get('role')
    position = request.args.get('position')
    specialization = request.args.get('specialization')

    # int binaryCase
    # if name != None: case + 1
    # if status != None: case + 2
    # if role != None: case + 4
    # if position != None: case + 8
    # if specialization != None: case + 16

    # switch (binaryCase) {
    #     case 0: return {"users_list": database.TeamRoster().find_all()}
    #     case 1: return {"users_list": database.TeamRoster().find_by_name(name)}
    #     case 2: return {"users_list": database.TeamRoster().find_by_status(status)}
    #     case 4: return {"users_list": database.TeamRoster().find_by_role(role)}
    #     case 8: return {"users_list": database.TeamRoster().find_by_position(position)}
    #     case 16: return {"users_list": database.TeamRoster().find_by_specialization(specialization)}
    # }

    filtered = []
    for p in proj_db['team_roster']:
      if name != None and p['name'] != name:
        continue
      if status != None and p['status'] != status:
        continue
      if role != None and p['role'] != role:
        continue
      if position != None and p['position'] != position:
        continue
      if specialization != None and p['specialization'] != specialization:
        continue
      filtered.append(p)
    return jsonify(filtered)

  elif request.method == 'POST':
    usertoAdd = request.get_json()
    proj_db['team_roster'].append(usertoAdd)
    resp = jsonify(usertoAdd)
    resp.status_code = 201
    return resp
