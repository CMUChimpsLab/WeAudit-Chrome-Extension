# WeAudit
Informational repository describing both the frontend and backend of the [WeAudit forum website](https://forum.weaudit.org).

WeAudit was set up as a Discourse server hosted by AWS Lightsail and Docker.
It is run on the crowdAuditsDiscourse [Lightsail instance](https://lightsail.aws.amazon.com/ls/webapp/us-east-1/instances/crowdAuditsDiscourse/connect) in the AWS Management Console on the AWS account for ChimpsLab.  

The current capacity for the server is 2 GB RAM, 1 vCPU, and 60 GB SSD. The server was created on March 24, 2022, 6:07 PM. This capacity is free for the first three months (up until June 24, 2022), and it will incur a monthly charge of $9.99 subsequently.

The IP addresses on the server include:

Public IP: `54.234.130.2`

Private IP: `172.26.4.182`

Public IPv6: `2600:1f18:251:1e00:d475:3d56:4dd3:ad7a`

The server is run under Ubuntu 20.04. SSH commands can be issued online through [here](https://lightsail.aws.amazon.com/ls/remote/us-east-1/instances/crowdAuditsDiscourse/terminal?protocol=ssh).

## Initial Setup:

Do not intend to replicate this setup. This is for informational purposes only to describe how the server was instantiated. In the SSH terminal for AWS Lightsail, type the following commands:

```
Step 0:

sudo apt update 

sudo apt upgrade -y 

Step 1:

sudo git clone https://github.com/discourse/discourse_docker.git /var/discourse
cd /var/discourse


Step 2:

sudo ./discourse-setup
```

## Editing the forum

Go to https://forum.weaudit.org

Sign into the admin account. The credentials are:
```
username: cmuweaudit
password: cmuweaudit12345
```

The admin is setup with an email account. The credentials are:
```
email address username: cmuweaudit@gmail.com
email address password: weaudit12345
```

To edit the website, go to the admin site once logged in.

Shortcuts:

1. [Editing a theme](https://forum.weaudit.org/admin/customize/themes) (This is used for adding and modifying existing features in the Discourse template by creating a custom template with HTML/CSS)
2. [Restrict IP addresses for admin login](https://forum.weaudit.org/admin/logs/screened_ip_addresses)

## Plans

Because we own the weaudit.org domain, https://weaudit.org can be an informational page that describes the purposes of our project while https://forum.weaudit.org is our primary discussion forum.
