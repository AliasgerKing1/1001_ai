from flask import Blueprint,jsonify, request
image_blueprint = Blueprint('image', __name__)

@image_blueprint.route('/generation', methods=['POST'])
def generateImage():
    
    return jsonify({'status' : "200"})



# test = pd.read_csv(r"C:\\Users\\Aliasger B\\1001_ai\\1001_ai_python\\Ai\\LearningMachineLearning\\dummy_fill_label.csv")
# test

# t = test[["A"]].values
# t
# from sklearn.preprocessing import LabelEncoder
# label_encoder_t = LabelEncoder()
# t[:, 0] = label_encoder_t.fit_transform(t[:, 0])
# t
# from sklearn.preprocessing import OneHotEncoder
# onehotencoder= OneHotEncoder()

# j = onehotencoder.fit_transform(test.A.values.reshape(-1, 1))

# # Convert the output to a NumPy array
# j_array = j.toarray()

# j_array






# x = dataset[["YearsExperience"]].values
# x
# y = dataset[["Salary"]].values
# y
# from sklearn.impute import SimpleImputer
# imputer = SimpleImputer(missing_values=np.nan,
#     strategy='mean')
# imputer = imputer.fit(x[:, 0:1])
# x[:, 0:1] = imputer.transform(x[:, 0:1])
# imputer2 = SimpleImputer(missing_values=np.nan,
#     strategy='mean')
# imputer2 = imputer2.fit(y[:, 0:1])
# y[:, 0:1] = imputer2.transform(y[:, 0:1])
# y
# from sklearn.model_selection import train_test_split
# x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=0)
# from sklearn.preprocessing import StandardScaler
# sc_x = StandardScaler()
# x_train = sc_x.fit_transform(x_train)
# x_test = sc_x.transform(x_test)