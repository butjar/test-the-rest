# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box_url = "https://atlas.hashicorp.com/ubuntu/boxes/precise64"
  config.vm.box = "ubuntu/precise64"

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.provider "virtualbox" do |vb|
    # Customize the amount of memory on the VM:
    vb.memory = "1024"
  end
  
  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
  SHELL

  config.vm.provision "chef_solo" do |chef|
    chef.json = {
      "mysql" => {
        "version" => "5.5",
        "server_root_password" => ""
      }
    }

    chef.add_recipe 'mysql::server'
  end
  
end
