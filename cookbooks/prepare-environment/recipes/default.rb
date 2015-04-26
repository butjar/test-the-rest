
include_recipe "mysql::server"

# install schema
bash "install Mysql schema" do
  cwd "/vagrant/"
  code "mysql -uroot < data/schema.sql"
end
