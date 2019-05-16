# AWSLearningNotes
Hands on learning on AWS CLI, Console, core and integrated services



https://awsnewbies.com/cloud-practitioner/
https://www.udemy.com/aws-certified-cloud-practitioner-2018-practice-questions/
https://aws.amazon.com/certification/certification-prep/


# AWS cloud ? 
	- agile in increasing resources
	- elastic scaling
	- fault tolerance
	
# How to use AWS 
	- AWS Management Console
	- CLI(Command Line Interface)
	- SDK (Software Development Kit)
	
# Key services on AWS 
# Amazon EC2 
		- Elastic Compute Cloud
			Compute - Compute or server resources  like web  / db  / mail / media server etc.
			elastic - increase or decrease resources
			
		- How to launch an EC2 instance
			- Search for EC2 in the service
			- Click Launch Instance
			- Choose the type of server needed - Linux / Red hat / Windows etc.
			- Then choose instance type - cpus/ memory needed etc
			- Configure Instance - like number of instances needed etc.
			- Add Storage - root storage , EBS additional storage 
			- Add tags eg : for uniquely identfying the instance 
			- Configure security group eg : type of access needed lik http on which port, ssh on which port. 
			
		- Download Putty to ?
			- Session Host Name 
				- default user  + @ + public DNS
				- ec2-user@ec2-3-91-241-69.compute-1.amazonaws.com
			- SSH > Auth > Open (need to generate ppk file if it's not yet generated. Steps are describe below)	
				- Putty on Windows require ppk file, so need to generate that using the puttygen
				- Open PutyGen 
					- Then click load and select the .pem file downloaded when creating the EC2 instance. 
					- then click save private key 
					- this will save it as a ppk file. 
			- then use that ppk file in the putty
		
# Amazon EBS
		- storage needed for the EC2 instances
		- volumes can be HDD / SSD
		- designed to be durable and available 
			- ssd - 
			- hdd - 
			- magnetic - for logs etc
		- can have encryption too 
		- can change from hdd to ssd 
		
		to attach a volume to an instance	
			- it must be in the same availability zone eg: us-east-1b
			- click volume > create volume > put the same availability zone as the instance > then click create volume 
			- click on volume > actions > attach volume > 
				> find instance > device = /dev/sdp
		connect to an instance
			- instance > select instance > connect 
			- then connect using putty - steps are described above
			- lsblk - to list all the block storage volumes
			- mke2fs /dev/xvdp - to create a folder (if there is super user issues type - sudo !!)
			- sudo mount /dev/xvdp /mnt mount folder 
			- cd /mnt to move to mnt folder 
			- ls - to list the files
			- vim file.txt ":q!" to save and exit
			- mkdir folder - to create a folder
			- mv fie.txt folder/ - to move to file.txt to folder
			
		detaching volume 
			- select volume > Actions > detach volume
			
# Amazon Simple Storage service / s3
		- simple api to storing and retrieving data
		- put as many objects. can be even have millions of requests per objects
		- store images / videos / server logs or event db snapshots
		- low latency period due to the http / https requests
		- use s3 privately through a virtual private cloud. 
		- can control using IAM to decide who can see data. 
		- by default all the data are stored privately 
		
		- how are the files saved ? 
			- Save files as key and object 
				- it's good practice to store key as file path eg: media/welcome.mp4
		- what happens when you create a bucket ? 
			- when you create a bucket it's stored in multiple facilities in the selected region.
			- grow automatically 
			- automatically scale 
		- how to access S3 ? 
			- CLI
			- Console 
			- SDL's
		
		- s3 names must unique and DNS compliant 
		- Common use cases 
			- can be used to save user generated file 
			- static web hosting
			- back and disaster recovery
			- storing area for big data... 
			
	- how to create bucket ? 
			- click s3 > Create Bucket > enter bucket name > click create 
			- simply upload any file from your local storage. 
			- DOWNLOAD Amazon CLI to add data 
				- aws --version to make sure that it's installed successfully. 
				- C:\Program Files\Amazon\AWSCLI - default location of the CLI installed if it's x64 version. 
				- aws configure - to connect to AWS service
					- generate the aws access key id & access key 
				- aws s3 ls - will list all the s3 buckets
			- Creating a txt file using powershell
				- new-item file.txt - file will be created
				- set-content file.txt 'file content'  - will set the file content
				- get-content file.txt - will get the file content. 
			- how to copy a file from local storage to S3 using CLI?
			- aws configure to connect to AWS
				- AWS Access Key ID :  AKIAZ3ZMVABJG5BLCMWD
				- AWS Secret Access Key :  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
				- aws s3 cp file.txt s3://amazing-bucket-name/hello.txt : to upload the file.
				- aws s3 sync ec2 s3://amazing-bucket-name/files : to sync a folder
			- how to access the s3 bucket contents in the EC2 instance 
				- connect to EC2 instance using putty 
				- aws s3 ls s3://amazing-bucket-name --recursive : to see all the files
				- aws s3 cp s3://amazing-bucket-name/hello.txt . : to download the local Ec2 instance 
				- cat hello.txt : to see the contents of file
				- aws s3 sync s3://amazing-bucket-name/files folder : to sync from s3 to Ec2 instance 
# AWS Global Infrastructure 
		- can be broken down into 3 topics 
			- Regions - Geographical areas  that hosts 2 or more availability zones.
				- which region - optimize latency while minimizing costs & adhering to regulatory requirements
				- can also deploy resource to  multiple regions depending on the needs.
				- resources are not automatically replicated to different regions 
				- not all services are available in all regions
			- Availability zones : collection of data centers in a specific region 
				- each availability zone is physically isolated from the others
				- but connected by fast low latency network
			- Edge location : hosts the CDN(Content Delivery Network) / amazon cloud front
				- cloud front is used to deliver content to the customers
				- request for content are automatically routed to the nearest edge location. 
				
# Amazon Virtual Private Cloud(VPC)
		- private, virtual network in the AWS cloud
		- VPC will also acts like a own premise network.
		
				
# Security Groups			
		- act like a built-in firewall for virtual service 
		- how to add a web security group ? 
			- Security groups > create security group > add name, description , http, https 
			
		
			
 
		
	
	
 
